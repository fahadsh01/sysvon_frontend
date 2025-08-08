// BlogCreate.jsx
import React, { useState } from "react";
import axios from "axios";

export default function BlogCreate() {
  const [title, setTitle] = useState("");
  const [avatar, setAvatar] = useState("");
  const [sections, setSections] = useState([
    { id: "", label: "", content: "" },
  ]);
  const [tags, setTags] = useState([""]);
  const [author, setAuthor] = useState("Sysvon Editorial Team");
  const [message, setMessage] = useState("");

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { id: "", label: "", content: "" }]);
  };

  const removeSection = (index) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const addTag = () => {
    setTags([...tags, ""]);
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("auther", author);
      formData.append("avatar", avatar); // file object
      formData.append("sections", JSON.stringify(sections));
      formData.append("tags", tags);

      const res = await axios.post(
        "http://localhost:5000/api/v1/blog/create-blog",
        formData
      );
      setMessage("✅ Blog created successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error creating blog.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Create New Blog</h2>

      {message && <p className="mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="w-full border p-2 rounded"
        />

        {/* Sections */}
        <div className="space-y-4">
          <h3 className="font-semibold">Sections</h3>
          {sections.map((section, index) => (
            <div key={index} className="border p-4 rounded space-y-2">
              <input
                type="text"
                placeholder="ID (e.g., intro)"
                value={section.id}
                onChange={(e) =>
                  handleSectionChange(index, "id", e.target.value)
                }
                className="w-full border p-1 rounded"
              />
              <input
                type="text"
                placeholder="Label (e.g., Introduction)"
                value={section.label}
                onChange={(e) =>
                  handleSectionChange(index, "label", e.target.value)
                }
                className="w-full border p-1 rounded"
              />
              <textarea
                placeholder="Content (Markdown or plain text)"
                value={section.content}
                onChange={(e) =>
                  handleSectionChange(index, "content", e.target.value)
                }
                className="w-full border p-1 rounded"
              />
              <button
                type="button"
                onClick={() => removeSection(index)}
                className="text-red-500 text-sm"
              >
                Remove Section
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSection}
            className="text-blue-600 font-medium"
          >
            ➕ Add Section
          </button>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <h3 className="font-semibold">Tags</h3>
          {tags.map((tag, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                className="w-full border p-1 rounded"
              />
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="text-red-500 text-sm"
              >
                ✖
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addTag}
            className="text-blue-600 font-medium"
          >
            ➕ Add Tag
          </button>
        </div>

        {/* Author */}
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}
