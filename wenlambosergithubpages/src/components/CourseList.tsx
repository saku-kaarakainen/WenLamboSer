import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Course from '../components/Course'

const SPACE_ID = '[INSERT YOUR CONTENTFUL SPACE ID HERE]'
const ACCESS_TOKEN = '[INSERT YOUR CONTENTFUL ACCESS TOKEN HERE]'


export default class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    }

    constructor(props: any) {
        super(props)
        this.getCourses()
    }

    getCourses = () => {
        // api call here
        this.setState({ courses: [] })
    }

    onSearchInputChange = (event: any) => {
        if (event.target.value) {
            this.setState({ searchString: event.target.value })
        } else {
            this.setState({ searchString: '' })
        }
        this.getCourses()
    }

    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField style={{ padding: 24 }}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        {/*spacing={24}*/}
                        <Grid container style={{ padding: 24 }}>
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found"}
            </div>
        )
    }
}