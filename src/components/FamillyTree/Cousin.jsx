import Special from "./Special";

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tom Tom' && <Special name='Shayla' asset={asset}></Special>
            }
        </div>
    );
};

export default Cousin;