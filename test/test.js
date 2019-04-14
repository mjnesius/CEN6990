const firebase = require("@firebase/testing");
const fs = require("fs");

/*
 * ============
 *    Setup
 * ============
 */
const projectName = "firestore-uwf-empowers";
const coverageUrl = `http://localhost:8080/emulator/v1/projects/${projectName}:ruleCoverage.html`;

const rules = fs.readFileSync("firestore.rules", "utf8");

/**
 * Creates a new app with authentication data matching the input.
 *
 * @param {object} auth the object to use for authentication (typically {uid: some-uid})
 * @return {object} the app.
 */
function authedApp(auth) {
  return firebase
    .initializeTestApp({ projectId: projectName, auth })
    .firestore();
}
function authedAppAdmin() {
  return firebase.initializeAdminApp({ projectId: projectName }).firestore();
}
/*
 * ============
 *  Test Cases
 * ============
 */
before(async () => {
  // Clear the database between tests
  await firebase.clearFirestoreData({
    projectId: projectName
  });
});

before(async () => {
  await firebase.loadFirestoreRules({
    projectId: projectName,
    rules: rules
  });
});

after(async () => {
  await Promise.all(firebase.apps().map(app => app.delete()));
  console.log(`View rule coverage information at ${coverageUrl}\n`);
});

describe("My app", () => {
  it("should prevent unauthenticated writes to admin", async () => {
    let db = authedApp(null);
    const ref = db.collection("admin").doc("id1");
    await firebase.assertFails(ref.set({ admin: true }));
  });
  it("should prevent authenticated user writes to admin", async () => {
    let db = authedApp({ uid: "u1" });
    const ref = db.collection("admin").doc("id1");
    await firebase.assertFails(ref.set({ admin: true }));
  });
  it("should prevent unauthenticated reads to admin", async () => {
    const admin = authedAppAdmin();
    const refAdmin = admin.collection("admin").doc("id1");
    refAdmin.set({ admin: true });
    const db = authedApp(null);
    const ref = db.collection("admin").doc("id1");
    await firebase.assertFails(ref.get());
  });
  it("should allow authenticated reads to admin", async () => {
    const db = authedApp({ uid: "u1" });
    const ref = db.collection("admin").doc("id1");
    await firebase.assertSucceeds(ref.get());
  });

  it("should prevent unauthenticated creates to comments", async () => {
    const db = authedApp(null);
    const ref = db.collection("comments").doc("d2");
    await firebase.assertFails(
      ref.set({
        course: "course2",
        alias: "Bob",
        content: "My comment."
      })
    );
  });
  it("should allow authenticated creates to comments", async () => {
    const db = authedApp({ uid: "u1", name: "Bob" });
    const ref = db.collection("comments").doc("d1");
    await firebase.assertSucceeds(
      ref.set({
        course: "course1",
        alias: "Bob",
        content: "My comment."
      })
    );
  });
  it("should prevent all updates to comments", async () => {
    const db = authedApp({ uid: "u1", name: "Bob" });
    const ref = db.collection("comments").doc("d1");
    await firebase.assertFails(
      ref.update({
        course: "course2",
        alias: "Bob",
        content: "My comment."
      })
    );
  });
  it("should prevent non-admin deletes to comments", async () => {
    const db = authedApp({ uid: "u1" });
    const ref = db.collection("comments").doc("d1");
    await firebase.assertFails(ref.delete());
  });
  it("should prevent unauthenticated reads to comments", async () => {
    const db = authedApp(null);
    const ref = db.collection("comments").doc("d1");
    await firebase.assertFails(ref.get());
  });
  it("should allow authenticated reads to comments", async () => {
    const db = authedApp({ uid: "u1" });
    const ref = db.collection("comments").doc("d1");
    await firebase.assertSucceeds(ref.get());
  });
  it("should allow admin deletes to comments", async () => {
    const db = authedApp({ uid: "id1" });
    const ref = db.collection("comments").doc("d1");
    await firebase.assertSucceeds(ref.delete());
  });
  it("should prevent invalid course string creates to comments", async () => {
    const db = authedApp({ uid: "u1", name: "Bob" });
    const ref = db.collection("comments").doc("course3");
    await firebase.assertFails(
      ref.set({
        course: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue lacus viverra vitae congue eu consequat ac. Tortor at risus viverra adipiscing. Proin fermentum leo vel orci porta non. Urna et pharetra pharetra massa massa ultricies mi. Sed enim ut sem viverra. Euismod lacinia at quis risus sed. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Egestas quis ipsum suspendisse ultrices. Venenatis urna cursus eget nunc scelerisque viverra mauris. Felis imperdiet proin fermentum leo vel. Interdum posuere lorem ipsum dolor sit amet. Netus et malesuada fames ac. Duis convallis convallis tellus id interdum velit.

        Sit amet aliquam id diam maecenas ultricies mi eget mauris. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Eget magna fermentum iaculis eu non diam phasellus. Volutpat blandit aliquam etiam erat velit scelerisque. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Donec pretium vulputate sapien nec. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Montes nascetur ridiculus mus mauris vitae. A diam maecenas sed enim ut sem viverra. Dui nunc mattis enim ut tellus elementum sagittis vitae et. In cursus turpis massa tincidunt dui. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Purus viverra accumsan in nisl nisi.
        
        Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Facilisis magna etiam tempor orci eu. Aliquam etiam erat velit scelerisque. Lectus nulla at volutpat diam ut venenatis tellus in metus. Et malesuada fames ac turpis. Integer malesuada nunc vel risus commodo viverra. Quam nulla porttitor massa id neque aliquam vestibulum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Mi ipsum faucibus vitae aliquet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sit amet est placerat in egestas erat imperdiet. Tincidunt praesent semper feugiat nibh sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Vel pharetra vel turpis nunc. Neque laoreet suspendisse interdum consectetur. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Duis convallis convallis tellus id interdum velit laoreet. Urna condimentum mattis pellentesque id nibh tortor id. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.
        
        Ac tincidunt vitae semper quis lectus nulla at. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Hendrerit gravida rutrum quisque non. Tempor orci eu lobortis elementum nibh tellus. Molestie ac feugiat sed lectus vestibulum mattis. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. At tellus at urna condimentum mattis pellentesque id nibh tortor. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Pharetra et ultrices neque ornare aenean euismod. Ac feugiat sed lectus vestibulum. Amet consectetur adipiscing elit ut aliquam purus. Vitae turpis massa sed elementum tempus. Vulputate odio ut enim blandit. Duis tristique sollicitudin nibh sit amet commodo nulla. Cras ornare arcu dui vivamus arcu felis.
        
        Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Molestie ac feugiat sed lectus vestibulum mattis. Praesent elementum facilisis leo vel fringilla est. Pretium lectus quam id leo in vitae. Elementum tempus egestas sed sed risus pretium quam. Libero justo laoreet sit amet cursus sit amet. Pretium lectus quam id leo. Nisl nunc mi ipsum faucibus vitae. Cras sed felis eget velit aliquet sagittis id. Quis auctor elit sed vulputate mi. Arcu bibendum at varius vel. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Viverra accumsan in nisl nisi scelerisque. At tempor commodo ullamcorper a lacus vestibulum sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Tincidunt tortor aliquam nulla facilisi cras fermentum. Augue mauris augue neque gravida.`,
        alias: "Bob",
        content: "My comment."
      })
    );
  });
  it("should prevent invalid content string creates to comments", async () => {
    const db = authedApp({ uid: "u1", name: "Bob" });
    const ref = db.collection("comments").doc("course4");
    await firebase.assertFails(
      ref.set({
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue lacus viverra vitae congue eu consequat ac. Tortor at risus viverra adipiscing. Proin fermentum leo vel orci porta non. Urna et pharetra pharetra massa massa ultricies mi. Sed enim ut sem viverra. Euismod lacinia at quis risus sed. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Egestas quis ipsum suspendisse ultrices. Venenatis urna cursus eget nunc scelerisque viverra mauris. Felis imperdiet proin fermentum leo vel. Interdum posuere lorem ipsum dolor sit amet. Netus et malesuada fames ac. Duis convallis convallis tellus id interdum velit.

        Sit amet aliquam id diam maecenas ultricies mi eget mauris. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Eget magna fermentum iaculis eu non diam phasellus. Volutpat blandit aliquam etiam erat velit scelerisque. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Donec pretium vulputate sapien nec. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Montes nascetur ridiculus mus mauris vitae. A diam maecenas sed enim ut sem viverra. Dui nunc mattis enim ut tellus elementum sagittis vitae et. In cursus turpis massa tincidunt dui. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Purus viverra accumsan in nisl nisi.
        
        Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Facilisis magna etiam tempor orci eu. Aliquam etiam erat velit scelerisque. Lectus nulla at volutpat diam ut venenatis tellus in metus. Et malesuada fames ac turpis. Integer malesuada nunc vel risus commodo viverra. Quam nulla porttitor massa id neque aliquam vestibulum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Mi ipsum faucibus vitae aliquet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sit amet est placerat in egestas erat imperdiet. Tincidunt praesent semper feugiat nibh sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Vel pharetra vel turpis nunc. Neque laoreet suspendisse interdum consectetur. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Duis convallis convallis tellus id interdum velit laoreet. Urna condimentum mattis pellentesque id nibh tortor id. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.
        
        Ac tincidunt vitae semper quis lectus nulla at. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Hendrerit gravida rutrum quisque non. Tempor orci eu lobortis elementum nibh tellus. Molestie ac feugiat sed lectus vestibulum mattis. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. At tellus at urna condimentum mattis pellentesque id nibh tortor. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Pharetra et ultrices neque ornare aenean euismod. Ac feugiat sed lectus vestibulum. Amet consectetur adipiscing elit ut aliquam purus. Vitae turpis massa sed elementum tempus. Vulputate odio ut enim blandit. Duis tristique sollicitudin nibh sit amet commodo nulla. Cras ornare arcu dui vivamus arcu felis.
        
        Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Molestie ac feugiat sed lectus vestibulum mattis. Praesent elementum facilisis leo vel fringilla est. Pretium lectus quam id leo in vitae. Elementum tempus egestas sed sed risus pretium quam. Libero justo laoreet sit amet cursus sit amet. Pretium lectus quam id leo. Nisl nunc mi ipsum faucibus vitae. Cras sed felis eget velit aliquet sagittis id. Quis auctor elit sed vulputate mi. Arcu bibendum at varius vel. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Viverra accumsan in nisl nisi scelerisque. At tempor commodo ullamcorper a lacus vestibulum sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Tincidunt tortor aliquam nulla facilisi cras fermentum. Augue mauris augue neque gravida.`,
        alias: "Bob",
        content: "course4"
      })
    );
    it("should prevent user from setting alias to other than diplayName in comment", async () => {
      const db = authedApp({ uid: "bob", name: "Bob" });
      const ref = db.collection("comments").doc("course5");
      await firebase.assertFails(
        ref.set({
          course: "course2",
          alias: "Alice",
          content: "My comment."
        })
      );
    });
    it("should prevent unathenticated reads to contacts", async () => {
      let db = authedApp(null);
      const ref = db.collection("contacts").doc("id");
      await firebase.assertFails(ref.get());
    });
    it("should prevent authenticated user reads to contacts", async () => {
      let db = authedApp({ uid: "u1" });
      const ref = db.collection("contacts").doc("id");
      await firebase.assertFails(ref.get());
    });
    it("should allow creates to contacts", async () => {
      const db = authedApp(null);
      const ref = db.collection("contacts").doc("id1");
      await firebase.assertSucceeds(
        ref.set({
          email: "somebody@cox.net",
          message: "My message.",
          name: "somebody"
        })
      );
    });
    it("should prevent invalid email string creates to contacts", async () => {
      const db = authedApp(null);
      const ref = db.collection("contacts").doc("id2");
      await firebase.assertFails(
        ref.set({
          email: "abcdefghijklmnopqrstuvwxyz@google.com",
          message: "My message.",
          name: "somebody"
        })
      );
    });
    it("should prevent invalid message string creates to contacts", async () => {
      const db = authedApp(null);
      const ref = db.collection("contacts").doc("id3");
      await firebase.assertFails(
        ref.set({
          email: "somebody@cox.net",
          name: "somebody",
          message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Augue lacus viverra vitae congue eu consequat ac. Tortor at risus viverra adipiscing. Proin fermentum leo vel orci porta non. Urna et pharetra pharetra massa massa ultricies mi. Sed enim ut sem viverra. Euismod lacinia at quis risus sed. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Egestas quis ipsum suspendisse ultrices. Venenatis urna cursus eget nunc scelerisque viverra mauris. Felis imperdiet proin fermentum leo vel. Interdum posuere lorem ipsum dolor sit amet. Netus et malesuada fames ac. Duis convallis convallis tellus id interdum velit.

    Sit amet aliquam id diam maecenas ultricies mi eget mauris. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Eget magna fermentum iaculis eu non diam phasellus. Volutpat blandit aliquam etiam erat velit scelerisque. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Donec pretium vulputate sapien nec. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Montes nascetur ridiculus mus mauris vitae. A diam maecenas sed enim ut sem viverra. Dui nunc mattis enim ut tellus elementum sagittis vitae et. In cursus turpis massa tincidunt dui. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Purus viverra accumsan in nisl nisi.
    
    Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Facilisis magna etiam tempor orci eu. Aliquam etiam erat velit scelerisque. Lectus nulla at volutpat diam ut venenatis tellus in metus. Et malesuada fames ac turpis. Integer malesuada nunc vel risus commodo viverra. Quam nulla porttitor massa id neque aliquam vestibulum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Mi ipsum faucibus vitae aliquet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sit amet est placerat in egestas erat imperdiet. Tincidunt praesent semper feugiat nibh sed. Sagittis purus sit amet volutpat consequat mauris nunc congue. Vel pharetra vel turpis nunc. Neque laoreet suspendisse interdum consectetur. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Duis convallis convallis tellus id interdum velit laoreet. Urna condimentum mattis pellentesque id nibh tortor id. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.
    
    Ac tincidunt vitae semper quis lectus nulla at. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Hendrerit gravida rutrum quisque non. Tempor orci eu lobortis elementum nibh tellus. Molestie ac feugiat sed lectus vestibulum mattis. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. At tellus at urna condimentum mattis pellentesque id nibh tortor. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Pharetra et ultrices neque ornare aenean euismod. Ac feugiat sed lectus vestibulum. Amet consectetur adipiscing elit ut aliquam purus. Vitae turpis massa sed elementum tempus. Vulputate odio ut enim blandit. Duis tristique sollicitudin nibh sit amet commodo nulla. Cras ornare arcu dui vivamus arcu felis.
    
    Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Molestie ac feugiat sed lectus vestibulum mattis. Praesent elementum facilisis leo vel fringilla est. Pretium lectus quam id leo in vitae. Elementum tempus egestas sed sed risus pretium quam. Libero justo laoreet sit amet cursus sit amet. Pretium lectus quam id leo. Nisl nunc mi ipsum faucibus vitae. Cras sed felis eget velit aliquet sagittis id. Quis auctor elit sed vulputate mi. Arcu bibendum at varius vel. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Viverra accumsan in nisl nisi scelerisque. At tempor commodo ullamcorper a lacus vestibulum sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Tincidunt tortor aliquam nulla facilisi cras fermentum. Augue mauris augue neque gravida.`
        })
      );
    });
    it("should prevent invalid name string creates to contacts", async () => {
      const db = authedApp(null);
      const ref = db.collection("contacts").doc("id4");
      await firebase.assertFails(
        ref.set({
          name: "abcdefghijklmnopqrstuvwxyz",
          message: "My message.",
          email: "somebody@cox.net"
        })
      );
    });
    it("should allow admin writes to courses", async () => {
      const db = authedApp({ uid: "id1" });
      const ref = db.collection("courses").doc("id1");
      await firebase.assertSucceeds(
        ref.set({
          title: "Test Title"
        })
      );
    });
    it("should allow all reads to courses", async () => {
      let db = authedApp(null);
      const ref = db.collection("courses").doc("id1");
      await firebase.assertSucceeds(ref.get());
    });
    it("should prevent unauthenticated writes to courses", async () => {
      const db = authedApp(null);
      const ref = db.collection("courses").doc("course");
      await firebase.assertFails(ref.set({ title: "Course Title" }));
    });
    it("should prevent authenticated non-admin writes to courses", async () => {
      const db = authedApp({ uid: "bob" });
      const ref = db.collection("courses").doc("course");
      await firebase.assertFails(ref.set({ title: "Course Title" }));
    });
    it("should prevent unauthenticated reads to trending", async () => {
      const db = authedApp(null);
      const ref = db.collection("trending").doc("course");
      await firebase.assertFails(ref.get());
    });
    it("should prevent non-admin authenticated reads to trending", async () => {
      const db = authedApp({ uid: "bob" });
      const ref = db.collection("trending").doc("course");
      await firebase.assertFails(ref.get());
    });
    it("should prevent all writes to trending", async () => {
      const db = authedApp({ uid: "bob" });
      const ref = db.collection("trending").doc("course");
      await firebase.assertFails(ref.set({ title: "Course Title" }));
    });
  });
  it("should allow authenticated creates to users", async () => {
    const db = authedApp({ uid: "bob1", name: "Bob" });
    const ref = db.collection("users").doc("bob1");
    await firebase.assertSucceeds(
      ref.set({
        alias: "Bob",
        user_id: "bob1"
      })
    );
  });
  it("should prevent unauthenticated reads to users", async () => {
    const db = authedApp(null);
    const ref = db.collection("users").doc("bob1");
    await firebase.assertFails(ref.get());
  });
  it("should prevent authenticated reads to users by non-owner", async () => {
    const db = authedApp({ uid: "bob1" });
    const ref = db.collection("users").doc("alice");
    await firebase.assertFails(ref.get());
  });
  it("should allow authenticated reads to users by owner", async () => {
    const db = authedApp({ uid: "bob1" });
    const ref = db.collection("users").doc("bob1");
    await firebase.assertSucceeds(ref.get());
  });
  it("should prevent unauthenticated creates to users", async () => {
    const db = authedApp(null);
    const ref = db.collection("users").doc("bob");
    await firebase.assertFails(ref.set({ alias: "bob", user_id: "bob" }));
  });
  it("should allow authenticated updates to users", async () => {
    const db = authedApp({ uid: "bob1", name: "Bob" });
    const ref = db.collection("users").doc("bob1");
    await firebase.assertSucceeds(
      ref.update({ alias: "Bob", history: ["course"], user_id: "bob1" })
    );
  });
  it("should prevent authenticated updates to users for non-owners", async () => {
    const db = authedApp({ uid: "alice1", name: "Alice" });
    const ref = db.collection("users").doc("bob1");
    await firebase.assertFails(ref.get());
  });
  it("should prevent deletes to users", async () => {
    const db = authedApp({ uid: "bob" });
    const ref = db.collection("users").doc("bob1");
    await firebase.assertFails(ref.delete());
  });
});
