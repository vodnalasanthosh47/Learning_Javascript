// Tasks:
// 1. Walk the dog
// 2. Clean the house
// 3. Do the laundry

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if (dogWalked) {
                resolve("Dog walked");
            } else {
                reject("Dog NOT walked");
            }
        }, 1500);
    });
}

function cleanHouse() {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const houseCleaned = true;

            if (houseCleaned) {
                resolve("House cleaned");
            }
            else {
                reject("House NOT cleaned");
            }
        }, 500);
    })
}

function doLaundry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const laundryDone = false;

            if (laundryDone) {
                resolve("Laundry done");
            } else {
                reject("Laundry NOT done");
            }
        }, 2000);
    });
}


// walkDog().then(value => {console.log(value); return cleanHouse();})
//          .then(value => {console.log(value); return doLaundry();})
//          .then(value => {console.log(value); console.log("All tasks completed");})
//          .catch(error => console.error(error))


async function performTasks() {
    try {
        const dogWalked = await walkDog();
        console.log(dogWalked);

        const houseCleaned = await cleanHouse();
        console.log(houseCleaned);

        const laundryDone = await doLaundry();
        console.log(laundryDone);

        console.log("All tasks completed");
    } catch(error) {
        console.error(error);
    }
}

performTasks();