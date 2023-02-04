
export const useFormSpree = ({id, dailyLimit, totalLimit }) => {

    const sendEmail = async ({name, email, message, subject}) => {
        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', `[Portfolio] [From: ${name}] "${subject}" `);
            formData.append('message', `
                [From: "${name}"]
                [Email: "${email}"]
                [Subject: "${subject}"]

                ${message}
            `);

            const config = {
                method: 'post',
                headers: {'Accept': 'application/json',},
                body: formData
            }

            await fetch(`https://formspree.io/f/${id}`, config);

        } catch (error) {
            console.error(error)
            console.error('Ocurrió un error en el envío del email');
        }
    };

    const getEmailInfo = () => {
        let emailInfo = {};

        if(localStorage.getItem('emailInfo')){
            emailInfo = JSON.parse(localStorage.getItem('emailInfo'));

            if(emailInfo.lastDate !== new Date().toDateString()){
                emailInfo = {
                    ...emailInfo,
                    lastDate: new Date().toDateString(),
                    todaySended: 0,
                }
            }

            localStorage.setItem('emailInfo', JSON.stringify(emailInfo) );

        }else{
            emailInfo = {
                lastDate: new Date().toDateString(),
                todaySended: 0,
                totalSended: 0, 
            }

            localStorage.setItem('emailInfo', JSON.stringify(emailInfo));
        }

        return emailInfo;
    }

    return async ({name, email, message, subject}) => {

        
        try {
            const emailInfo = getEmailInfo(); 

            if( emailInfo.todaySended <= dailyLimit && emailInfo.totalSended <= totalLimit ){
                await sendEmail({name, email, message, subject});
                
                const newEmailInfo = {...emailInfo}
                newEmailInfo.todaySended += 1;
                newEmailInfo.totalSended += 1;
    
                localStorage.setItem('emailInfo', JSON.stringify(newEmailInfo));
    
                return ({
                    ok: true,
                    msg: 'Email enviado con éxito.'
                })

            }else{
                let msg = '';

                if(emailInfo.todaySended > dailyLimit && emailInfo.totalSended <= totalLimit){
                    msg = 'Has enviado demasiados emails hoy, intenta mañana.';
                }else{
                    msg = `Has alcanzado el límite de emails enviados (${totalLimit}).`;
                }

                return({
                    ok: false,
                    msg,
                });
            }

        } catch (error) {
            console.error(error);
            return({
                ok: false,
                msg: error,
            })
        }

    }
};