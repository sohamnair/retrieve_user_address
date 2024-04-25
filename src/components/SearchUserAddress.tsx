import { Autocomplete, Card, CardContent, Divider, TextField, Typography } from '@mui/material';
import * as React from 'react';
import reverseUserName from '../common/reverseUserName';

const SearchUserAddress = () => {
    //initializing the user data array to be used for storing the response from the endpoint
    const [userData, setUserData] = React.useState<any>([{}]);
    //initializing the current user state to be used for storing the user selected from the dropdown
    const [currUser, setCurrUser] = React.useState<any>();

    React.useEffect(() => {
        async function getUserData() {
            //retrieving user information 
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            //extracting user data 
            let uData = await res.json();
            
            let uNameData: string[] = [];
            //looping and calling the function to restructure the user name
            uData.forEach((item: any, idx: any) => {
                let reversedName: string = reverseUserName(item["name"])
                item["name"] = reversedName
                uNameData.push(item)
            })
            //sorting the user data based on name
            uNameData.sort(function(a: any, b: any) {
                var nameA = a["name"].toLowerCase()
                var nameB = b["name"].toLowerCase()
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            //setting the user array with the expected user data
            setUserData(uNameData)
        }
        //function call to get and manipulate the user data
        getUserData();
    }, [])

    return (
        <div style={{margin: "50px"}}>
            {/* searchable dropdown showing user name and setting the current user selected */}
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={(event: any, newValue: any) => {
                setCurrUser(newValue);
            }}
            options={userData}
            getOptionLabel= {(option: any) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Name" />}
            />

            <br/>
            
            {/* cardview showing the current user's name and address */}
            {currUser ? 
            <Card variant="outlined" sx={{ maxWidth: 300 }}>
                <CardContent>
                    <Typography variant="h6" component="div" textAlign={"left"}>
                        {currUser.name}<br/>
                    </Typography>
                    <Divider orientation="horizontal" />
                    <br/>
                    <Typography variant="subtitle1" component="div" textAlign={"left"}>
                        {currUser.address.street},<br/>
                        {currUser.address.suite},<br/>
                        {currUser.address.city},<br/>
                        {currUser.address.zipcode}
                    </Typography>
                </CardContent>
            </Card>
            : ""}

        </div>
    )
}

export default SearchUserAddress