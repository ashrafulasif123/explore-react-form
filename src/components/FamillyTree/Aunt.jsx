import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({asset}) => {

    const [money, setMoney] = useContext(MoneyContext)

    const handleAddMoney = () => {
        setMoney(money + 5000)
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name="Tom Tom" asset={asset}></Cousin>
                <Cousin name="Jo Joooo"></Cousin>
                <button onClick={handleAddMoney}>Add 5000</button>
            </section>
        </div>
    );
};

export default Aunt;