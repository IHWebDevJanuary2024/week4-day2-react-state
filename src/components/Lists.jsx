import './Lists.css'

function Lists() {
    const numbersList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];

    const students = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Ava", "Benjamin", "Isabella"];

    const studentsInLi = students.map((student, index) => {
        const studentLi = <li key={index}>{student}</li>;
        return studentLi;
    })

    const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Strawberry", "Watermelon", "Pineapple", "Kiwi", "Peach"];

    const projects = [
        { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
        { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
        { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
        { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
    ];


    return (
        <section className="lists-section">
            <div>
                <h3>First list of students</h3>
                <ul>
                    {studentsInLi}
                </ul>

            </div>
            <div>
                <h3>List of fruits</h3>
                <ul>
                    {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)} {/* Remember the return is implicit if we do it in one line */}
                </ul>

            </div>
            <div>
                <h3>List of projects</h3>
                <ul>
                    {
                        projects.map((project) => {
                            return <li key={project._id}>
                                <p>{project.name}</p>
                                <p>{project.techStack}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Lists;