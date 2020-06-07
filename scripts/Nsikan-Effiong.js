const myDatas = {
    id: 'HNG-05267',
    fullName: 'Nsikan Effiong',
    language: 'Javascript',
    email: 'nsibest7@gmail.com',
    fullDetails() {
        return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task.`
    }
}

console.log(myDatas.fullDetails())
