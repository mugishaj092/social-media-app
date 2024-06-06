import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import "./profileModal.css";

function ProfileModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => {
          setModalOpened(false);
        }}
        size="55%"
        title="Edit Profile"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form action="" className="inforform">
          <h3>Your Info</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="Firstname"
              placeholder="First name"
            />
            <input
              type="text"
              className="infoInput"
              name="Lastname"
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="workAT"
              placeholder="Work at"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIn"
              placeholder="Lives in"
            />
            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="relationship"
              placeholder="Relationship Status"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>
          <button className="button S-btn">Update</button>
        </form>
      </Modal>
    </>
  );
}
export default ProfileModal;
