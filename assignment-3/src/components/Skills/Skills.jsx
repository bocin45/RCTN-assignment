import React from "react";

class Skills extends React.Component {
    render() {
        return (
            <>
                <h1>
                    Skills
                </h1>
                <h3 style={{
                    textAlign: "left"
                }}>
                    <dl>
                        <dt>
                            Programming Languange
                        </dt>
                        <dd>
                            - Java, Javascript,
                        </dd>
                        <dt>
                            Database
                        </dt>
                        <dd>
                            - Oracle, Postgre
                        </dd>
                        <dt>
                            Tools
                        </dt>
                        <dd>
                            - Intellij
                        </dd>
                    </dl>
                </h3>
            
            </>
        )
    }
}

export default Skills;