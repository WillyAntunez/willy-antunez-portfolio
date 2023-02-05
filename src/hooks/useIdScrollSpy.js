import { useEffect, useState } from "react"

export const useIdScrollSpy = ({ids, initialValue}) => {

    const [activeScrollElement, setActiveScrollElement] = useState(initialValue);
    

    const getActiveId = () => {

        for(let id of ids){

            const element = document.getElementById(id);

            if(element){   

                const top = element.getBoundingClientRect().y;
                const height = element.getBoundingClientRect().height;
                const bottom = top + height;

                const vHeight = window.innerHeight; 


                if(bottom > 0 && bottom <= vHeight && bottom > (vHeight / 2)){
                    setActiveScrollElement(() => id);
                    break;
                }else if(top < 0 && bottom > vHeight){
                    setActiveScrollElement(() => id);
                    break;
                }else if(top >= 0 && top < vHeight){
                    setActiveScrollElement(() => id);
                    break;
                } 
            }
        }
    }


    
    useEffect(() => {
    
        document.addEventListener('scroll', getActiveId);

        return () => {
            document.removeEventListener('scroll', getActiveId);
        }

    }, [activeScrollElement])
    

    return {activeScrollElement};
}
