import { configureStore} from "@reduxjs/toolkit";
import LikesSlice from '../Slice/LikesSlice'
import MenuSlice from '../Slice/MenuSlice'

const Store = configureStore(
    {
        reducer : {
            likes : LikesSlice,
            menu : MenuSlice
        }
    }
)

export default Store;