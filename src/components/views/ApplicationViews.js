import { Outlet, Route, Routes } from "react-router-dom"
import { Location } from "../Inventory/locations"
import { Products } from "../Inventory/ProductList"



export const ApplicationViews = () => {
	return (
        <>
<Routes>
    <Route path="locations" element={ <Location /> } />
    <Route path="ProductList" element={ <Products /> } />
    </Routes>

            </>
            
    )
}


