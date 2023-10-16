/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { playerData } from '../shared/ListOfPlayers'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'

export default function Player() {
    const [player, setPlayer] = useState([])
    return (
        <>
            <Container>
                <Row>
                    {playerData.map((player)=>(
                        <Col m={4} s={12} key={player.id}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={player.img}>{player.name}</CardTitle>}
                                revealIcon={<Icon>more_vert</Icon>}
                            >
                                <p>{player.title}</p>
                                <Link to={`detail/${player.id}`}><button className='detail-button'>Detail</button></Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}