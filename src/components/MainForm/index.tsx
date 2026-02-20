import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefautButton";

export default function MainForm() {
    return (
        <form className='form' action=''>
            <div className='formRow'>
                <DefaultInput 
                    labelText={`task: 1}`} 
                    id='input' 
                    type='text' 
                    placeholder='Digite a tarefa'
                />
            </div>

            <div className='formRow'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='formRow'>
                <Cycles />
            </div>

            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>

        </form>
    );
};