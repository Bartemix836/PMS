
type Props = {
    onBackBtnClickHnd: () => void;
};

const AddProcess = (props: Props)=> { 
    const {onBackBtnClickHnd} = props;
    
    return ( 
        <>
            <form >
                <div>
                    <label>Input Materials</label>
                    <input type="text"/>   
                </div>
                <div>
                    <label>Temperature</label>
                    <input type="text"/>  
                </div>
                <div>
                    <label>Operation Time</label>
                    <input type="text"/>  
                </div>
                <div>
                    <label>OutputProduct</label>
                    <input type="text"/>  
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                    <input type="submit" value="Add Process"/>  
                </div>
            </form>

        </>
        
    );
}

export default AddProcess;