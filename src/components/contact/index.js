import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../constants";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${(props) => props.navbarHeight}rem);
  margin-top: ${(props) => props.navbarHeight}rem;
  width: 100%;
  background: black;
  background-image: linear-gradient(${COLORS.secondary}, ${COLORS.color3});
  @media (max-width: ${BREAKPOINTS.phablet}) {
    padding: 0rem 1rem;
    height: auto;
    min-height: 100vh;
  }
  .card {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    margin: 0rem 25%;
    color: white;
    padding: 10rem;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0.25rem 0.25rem 1rem 0rem black;
    min-width: 25vw;
    min-height: 25vh;
    @media (max-width: ${BREAKPOINTS.phablet}) {
      margin: 1rem 0rem;
      width: 100%;
      flex-direction: column;
      padding: 5rem 0rem;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    form {
      display: grid;
      grid-template-columns: 1fr, 3fr;
      grid-gap: 1.5rem;
      font-size: 1.5rem;
      label,
      input {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      label {
        grid-column: 1 / 2;
      }
      input {
        grid-column: 2 / 3;
        background: transparent;
        border: none;
        border-bottom: thin solid white;
        color: white;
      }
      textarea {
        grid-column: 1 / 3;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
        padding: 1rem;
        resize: none;
        min-width: 50rem;
        min-height: 25rem;
        border: none;
        color: white;
      }
      button {
        grid-column: 1 / 3;
        margin: 0 5rem;
        border: none;
        background: transparent;
      }
    }
  }
`;

export default function Contact(props) {
  const { register, errors, handleSubmit, reset } = useForm();

  function onSubmit(values) {
    reset();
  }

  const { navbarHeight } = props;
  console.log(navbarHeight);
  return (
    <Container navbarHeight={navbarHeight}>
      <section className="card">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            name="name"
            ref={register({ required: true })}
            placeholder="Name"
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            placeholder="Email"
          />
          <label>Subject</label>
          <input name="subject" placeholder="Subject" ref={register} />
          <textarea
            name="message"
            ref={register({ required: true })}
            placeholder="Message"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </Container>
  );
}