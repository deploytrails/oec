import fetch from "cross-fetch";

export const getDegreeData = async () => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/getDegreesData`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
