import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteInTrello } from 'store/slices/todoSlider';
import styled from 'styled-components';

const InTodoTask = (props) => {
    const dispatch = useDispatch()
  return (
    <ul style={{ padding: 0 }}>
    {props.taskCard.map((el) => (
      <LiTrelloIn key={el.id}>
        <p>{el.task} </p>
        <Images>
          <img
            onClick={() =>
              dispatch(deleteInTrello({ id: el.id, idCard: el.idCard }))
            }
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/x-256.png"
            alt="icon"
          />
        </Images>
      </LiTrelloIn>
    ))}
  </ul>  )
}

export default InTodoTask

const LiTrelloIn = styled.li`
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 1fr;
  align-items: center;

  border-radius: 5px;
  margin: 2%;
  background-color: #fff;
  & p {
    margin: 5%;
    width: 90%;
    word-wrap: break-word;
  }
`;
const Images = styled.div`
  & img {
    width: 25px;
  }
`;
