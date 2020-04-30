function delay(milliseconds:number, count:number): Promise<number>{
    return new Promise<number>((resolve, reject)=>{
        setTimeout(()=>{
            resolve(count);
        }, milliseconds); 
    });
}

async function dramaticWelcome(): Promise<void>{
    console.log("Hello");

    for(let i=0; i<5; i++){
        //
        const count: number = await delay(500,i); 
        console.log(count);
    }

    console.log("World!"); 
}

dramaticWelcome();
//Hello
//0
//1
//2
//3
//4
//World!