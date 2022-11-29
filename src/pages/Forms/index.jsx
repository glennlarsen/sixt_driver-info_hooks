import React from 'react'
import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";

function Forms() {
  return (
    <Container>
      <Head page="Forms" description="Select a form that you want to use or create a new form" />
      <Header title="Forms" />
      <section className='main-layout'>
        <div>
          <span>flesland@sixt.no</span>
          <button>Logout</button>
        </div>
        <div>
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
        </div>
      </section>
    </Container>
  )
}

export default Forms;