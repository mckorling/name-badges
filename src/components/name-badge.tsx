// hover over NameBadge to see:
// it is a function that takes no arguments and returns a jsx element
// but then we can add a prop and types
// return type is a bit extra but can help keep you honest when developing to make sure it returns the expected type
// especially for helper functions, it can be helpful
// const NameBadge = ({ name }: { name: string }): JSX.Element => {

type NameBadgeProps = {
  name: string;
  greeting?: string; // optional, but if it exists, it's a string
};
const NameBadge = (props: NameBadgeProps): JSX.Element => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{props.greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        {/* now because there are prop types, ts knows what type and there should be info showing up for name below and when trying to call a method on it */}
        <p className="badge-name">{props.name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;

// another method
// const NameBadge = (props: {name: string}) =>
// then in the return element, would need to access 'name' with 'props.name'
