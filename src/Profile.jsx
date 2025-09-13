function Profile(){
    const name="Nikhila"
    const age=18
    const isStudent=true
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>{isStudent===true?"I am student":"Not a student"}</p>
        </div>
    )
}
export default Profile