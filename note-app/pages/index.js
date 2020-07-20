import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

const Index = ({ data }) => {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {data.map((note) => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <h3>{note.description}</h3>
                  <Link href={`/${note._id}`}>
                    <Button>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();

  return { props: { data } };
};

/*Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();

  return { notes: data };
};*/
