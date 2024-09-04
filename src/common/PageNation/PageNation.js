import React, {useEffect, useState} from 'react';
import Pagination from "react-bootstrap/Pagination";
import "./PageNation.css"
const PageNation = ({data, pageNum, setMoviesData}) => {

    const [active, setActive] = useState(1);


    useEffect(() => {
        const splitArrayIntoChunks = (array, chunkSize) => {
            let result = [];
            for (let i = 0; i < array?.length; i += chunkSize) {
                let chunk = array.slice(i, i + chunkSize);
                result.push(chunk);
            }
            return result;
        };

        const pagingData = splitArrayIntoChunks(data, pageNum);

        if (pagingData.length > 0) {
            setMoviesData(pagingData[active - 1]);
        }
    }, [active, data, pageNum]); // keyword 제거


    let items = [];
    const clickPage = (number) => {
        setActive(number)
    }

    for (let number = 1; number <= (data?.length/pageNum)+1; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => clickPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

  return (
    <div className={"pageArea"}>
        <Pagination>{items}</Pagination>
    </div>
  );
}

export default PageNation;