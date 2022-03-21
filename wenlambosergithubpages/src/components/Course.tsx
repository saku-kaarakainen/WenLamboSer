import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class Course extends React.Component {
    props: any

    constructor(props: any) {
        super(props)

        this.props = props
    }

    render() {
        return (
            <div>
                {this.props.course ? (
                    <Card>
                        <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                            image={this.props.course.fields.courseImage.fields.file.url}
                            title={this.props.course.fields.title}
                        />
                        <CardContent>
                            {/*variant="headline"*/}
                            <Typography gutterBottom component="h2">
                                {this.props.course.fields.title}
                            </Typography>
                            <Typography component="p">
                                {this.props.course.fields.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href={this.props.course.fields.url} target="_blank">
                                Go To Course
                            </Button>
                        </CardActions>
                    </Card>
                ) : null}
            </div>
        )
    }
}