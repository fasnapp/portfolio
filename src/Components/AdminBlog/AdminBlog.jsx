import React, { useState } from "react";
import "./AdminBlog.css";

const AdminBlog = () => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", date: "", image: "", excerpt: "", content: "" });

  const startAdd = () => { setForm({ title: "", date: "", image: "", excerpt: "", content: "" }); setEditing("add"); };
  const startEdit = p => { setForm(p); setEditing(p.id); };
  const cancel = () => { setForm({ title: "", date: "", image: "", excerpt: "", content: "" }); setEditing(null); };

  const save = () => {
    if (editing === "add") {
      setPosts([...posts, { ...form, id: Date.now() }]);
    } else {
      setPosts(posts.map(p => (p.id === editing ? form : p)));
    }
    cancel();
  };

  const remove = id => setPosts(posts.filter(p => p.id !== id));

  return (
    <section className="admin-blog container py-5">
      <h2 className="mb-4">Admin Blog Manager</h2>
      {!editing ? (
        <button className="btn btn-warning mb-3" onClick={startAdd}>+ Add New Post</button>
      ) : (
        <div className="mb-4">
          <input type="text" className="form-control mb-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
          <input type="date" className="form-control mb-2" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
          <input type="text" className="form-control mb-2" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
          <textarea className="form-control mb-2" placeholder="Excerpt" rows="2" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })}></textarea>
          <textarea className="form-control mb-2" placeholder="Full Content" rows="4" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>
          <button className="btn btn-success me-2" onClick={save}>Save</button>
          <button className="btn btn-secondary" onClick={cancel}>Cancel</button>
        </div>
      )}

      <ul className="list-group">
        {posts.map(p => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{p.title}</h5>
              <small>{p.date}</small>
            </div>
            <div>
              <button className="btn btn-sm btn-info me-2" onClick={() => startEdit(p)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => remove(p.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminBlog;
