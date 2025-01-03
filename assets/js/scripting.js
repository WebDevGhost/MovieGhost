(function () {
    const webhookURL = "https://discord.com/api/webhooks/1324681928531644426/uVSX1qVGsLwMviTJJtuVPk1D4uYqL7hlqKix_NzTh2XrrNeHZ1ibr_VVP3ab_gMCMNzv";

    let visitCount = localStorage.getItem("visitCount");
    visitCount = visitCount ? parseInt(visitCount) : 0;

    visitCount += 1;

    localStorage.setItem("visitCount", visitCount);

    const webhookPayload = {
        content: `You have a new visit on Your site!\nYou have ${visitCount} total visits!`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookPayload)
    })
    .then(response => {
        if (!response.ok) {
            console.error("Failed to send Discord webhook:", response.statusText);
        }
    })
    .catch(error => {
        console.error("Error sending Discord webhook:", error);
    });
})();