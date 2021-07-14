import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <Header>
      <h1>{props.title}</h1>
    </Header>
  );
};



Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
