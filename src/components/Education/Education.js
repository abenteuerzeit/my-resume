const Education = (props) => {
    return (
        <>
        <h3>Education</h3>
        <div className="Education">
            <div>
                <h4>University</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Degree</th>
                            <th>Major</th>
                            <th>Graduation Year</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.University.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.degree}</td>
                                    <td>{item.major}</td>
                                    <td>{item.graduationYear}</td>
                                    <td>{item.location}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Education;