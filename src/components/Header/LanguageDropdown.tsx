import Divider from "../common/Divider";

const LanguageDropdown = () => {
  return (
    <div>
      <h2>Select Language</h2>
      <Divider />
      <form action="">
        <div className="flex items-center gap-2">
          <input type="radio" name="language" id="bangla" />
          <label htmlFor="">Bangla</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="language" id="english" />
          <label htmlFor="">English</label>
        </div>
      </form>
    </div>
  );
};

export default LanguageDropdown
