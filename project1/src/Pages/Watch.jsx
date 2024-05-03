import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getWatchData} from "../Redux/action";
import {useLocation, useSearchParams} from "react-router-dom";

export const Watch = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const dispatch = useDispatch();
  const watchData = useSelector((store) => store.watches);
  
  useEffect(() => {
    if (location || watchData.length === 0) {
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
        },
      };

      dispatch(getWatchData(queryParams));
    }
  }, [location.search]);

  console.log(location)

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "10px",
        }}
      >
        {watchData?.map((el) => (
          <div
            key={el.id}
            style={{
              display: "grid",
              gap: "20px",
              padding: "10px",
              height: "300px",
              width: "300px",
              border: "1px solid red",
            }}
          >
            {el.name}
            <div>
              <img src={el.image} alt={el.name} width="150px" />
            </div>
            <div>{el.category} </div>
          </div>
        ))}
      </div>
    </>
  );
};
