import { useLocation, useNavigate } from "react-router-dom";

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (key, value) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined || value === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        navigate({
            pathname: location.pathname,
            search: searchParams.toString(),
        });
    };
};
