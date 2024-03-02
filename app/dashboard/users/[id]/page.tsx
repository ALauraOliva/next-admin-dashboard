import Image from "next/image";

function SingleUserPage() {
  return (
    <div>
      <div>
        <div>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" placeholder="John Doe" />
        <label>Email</label>
        <input type="email" name="email" placeholder="john@gmail.com" />
        <label>Password</label>
        <input type="password" name="password" placeholder="+1234567" />
        <label>Address</label>
        <textarea name="address" placeholder="New York"></textarea>
      </div>
    </div>
  );
}

export default SingleUserPage;
