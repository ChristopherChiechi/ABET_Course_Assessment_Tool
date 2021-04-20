import { useState } from 'react';
import { Checkbox, HStack }  from '@chakra-ui/react';

const CheckBoxGroup = ( { studentMap } ) => {
    const [checkArray, setCheckArray] = useState(studentMap);
    
    const HandleCheck = (idx) => {
        var temp = checkArray;
        temp[idx] = (temp[idx] === 0) ? 1 : 0;
        setCheckArray(temp);
        console.log(checkArray);
    }
   
    return(
        <HStack w="90%" spacing={8} justify="center">
            {studentMap.map((value, idx) => {
                return(
                    <Checkbox
                        value={value}
                        onChange={e => {
                            e.preventDefault();
                            HandleCheck(idx)}
                        }
                    >
                        {idx+1}
                    </Checkbox>
                )
            })}
        </HStack>
    )
}

export default CheckBoxGroup;