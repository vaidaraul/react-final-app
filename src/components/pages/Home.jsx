import { useEffect, useState } from "react";
import { getPosts } from "../../services/postsService";
import PostComponent from "../complex/PostComponent";

const Home = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const newRowsArr = [];

        getPosts().then(async (res) => {
            res.forEach((post) => {
                newRowsArr.push(<PostComponent key={post.id} post={post} />);
            });

            setRows(newRowsArr);
        });
    }, []);

    return <>{rows.length > 0 ? rows : <p>Loading...</p>}</>;
};

export default Home;
