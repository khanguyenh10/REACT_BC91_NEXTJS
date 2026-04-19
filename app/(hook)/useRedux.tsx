import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../(redux)/store";

const useRedux = () => {
    const dispatch = useDispatch();
    const useAppSelector = (selector: (state: RootState) => any) => useSelector(selector);
    return {
        useAppSelector,
        dispatch
    }
}
export default useRedux;