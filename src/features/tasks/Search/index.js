import { useQueryParameter } from "../useQueryParameter";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";
import { Wrapper, Input } from "./styled";

const SEARCH_QUERY_PARAM_NAME = "search";

const Search = () => {
    const searchQuery = useQueryParameter(SEARCH_QUERY_PARAM_NAME) || "";
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        const { value } = target;

        replaceQueryParameter(
            SEARCH_QUERY_PARAM_NAME,
            value.trim() === "" ? undefined : value
        );
    };

    return (
        <Wrapper>
            <Input
                placeholder="Szukaj zadania"
                value={searchQuery}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;
