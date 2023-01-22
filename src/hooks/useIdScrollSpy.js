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

                // console.log({top, height, vHeight, bottom})


                if(bottom > 0 && bottom <= vHeight && bottom > (vHeight / 2)){
                    // console.log(id)
                    // console.log('el mas visible')
                    setActiveScrollElement(() => id);
                    break;
                }else if(top < 0 && bottom > vHeight){
                    // console.log(id)
                    // console.log('el elemento cubre todo, el más visible')
                    setActiveScrollElement(() => id);
                    break;
                }else if(top >= 0 && top < vHeight){
                    // console.log(id)
                    // console.log('el mas visible')
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
