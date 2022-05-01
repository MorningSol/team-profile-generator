


function createTeamCards(teamArray){
    const cardsArray = [];
    teamArray.forEach(member => {

        if (member.getRole() === "manager"){
            const managerCard =
            `
            <div class="col">
                <div class="card shadow">
                    <div class="card-header text-white bg-primary p-3">
                        <h2>${member.getName()}</h2>
                        <p class="fs-4"><i class="fa-solid fa-mug-hot"></i> Manager</p>
                    </div>
                    <div class="card-body bg-primary bg-opacity-10 py-5">
                        <ul class="list-group list-group-flush border border-3">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${member.getOfficeNum()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
            cardsArray.push(managerCard)
        }


        else if (member.getRole() === "engineer"){
            const engineerCard =`
            <div class="col">
                <div class="card shadow">
                    <div class="card-header text-white bg-primary p-3">
                        <h2>${member.getName()}</h2>
                        <p class="fs-4"><i class="fa-solid fa-glasses"></i> Engineer</p>
                    </div>
                    <div class="card-body bg-primary bg-opacity-10 py-5">
                        <ul class="list-group list-group-flush border border-3">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `    
            cardsArray.push(engineerCard)
        }

        else if (member.getRole() === "intern"){
            const internCard = `
            <div class="col">
                <div class="card shadow">
                    <div class="card-header text-white bg-primary p-3">
                        <h2>${member.getName()}</h2>
                        <p class="fs-4"><i class="fa-solid fa-user-graduate"></i> Intern</p>
                    </div>
                    <div class="card-body bg-primary bg-opacity-10 py-5">
                        <ul class="list-group list-group-flush border border-3">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                            <li class="list-group-item">School: ${member.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
            cardsArray.push(internCard)
        }

    })
    const teamHtml = cardsArray.join('')
    return teamHtml
}


function generateHTML(teamArray){
    console.log(teamArray)

   
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>My Team</title>
        </head>

        <body>
            <header class="bg-danger text-white p-5">
                <h1 class="text-center">My Team</h1>
            </header>

            <main class="m-5 d-flex justify-content-center">
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
                        ${createTeamCards(teamArray)}
                    </div>
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>
    </html>
    `;   
};

module.exports = generateHTML;


