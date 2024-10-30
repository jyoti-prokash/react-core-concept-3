

const From = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        
    };
    return (
        <div>
                <form onSubmit={handleSubmit}>  
                        Username: <input type="text" name="name" /> <br />
                        Email: <input type="email" name="email"/> <br />
                        <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default From;