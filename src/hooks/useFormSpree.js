
export const useFormSpree = (id) => {
    return async ({name, email, message, subject}) => {

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

            const resp = await fetch(`https://formspree.io/f/${id}`, config);
            console.log({resp});

        } catch (error) {
            console.error(error)
            console.error('Ocurrió un error');
        }

    }
}