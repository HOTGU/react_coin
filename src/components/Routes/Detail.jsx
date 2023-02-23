import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailById } from "../../api";
import Loader from "../Loader";

const Detail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery(["getDetailById", id], () =>
    getDetailById(id)
  );

  if (isLoading) return <Loader isCenter={true} />;

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="flex gap-2 items-center">
        <img src={data?.logo} alt="logo_img" className=" w-14" />
        <h1 className="font-bold text-4xl drop-shadow-xl">{data?.name}</h1>
      </div>
    </div>
  );
};

export default Detail;
