// eslint-disable-next-line no-unused-vars
export default class EntryData{

    bumpValue = 100

    constructor(indexId, title, description, updatedDate, isPublic) {
        this.indexId = indexId
        this.title = title
        this.description = description
        this.updatedDate = updatedDate
        this.isPublic = isPublic
    }

    increaseBumpValue(){
        this.bumpValue += 1
    }
}


