//function to restructure the name in the given format: lastname suffix(if exists), firstname title(if exists)
const reverseUserName = (name: string): string => {
    //list of commonly used titles
    let titleList: string[] = ["Mr.", "Mrs.", "Miss", "Ms.", "Dr.", "Prof.", "Hon.", "Sir", "Madam", "Captain", "Colonel", "General", "Senator"]
    //splitting the name based of space, into an array of string
    let nameSplit: string[] = name.split(" ")
    //initializing the new name to be returned after performing the necessary changes
    let newName: string = ""
    //assuming there is no title
    let idx: number = 1, hasTitle: boolean = false
    //condition to check if the title exists
    if(titleList.includes(nameSplit[0])) {
        idx = 2
        hasTitle = true
    }
    //looping over the lastname and suffix(if exists)
    for(let i = idx; i<nameSplit.length; i++) newName += " "+nameSplit[i]
    newName += ","
    //adding the firstname and title(if exists)
    if(hasTitle) newName += " "+nameSplit[1]+" "+`(${nameSplit[0]})`
    else newName += " "+nameSplit[0]
    
    //trim to remove space at start and end of the string
    newName = newName.trim();
    
    return newName
}

export default reverseUserName;