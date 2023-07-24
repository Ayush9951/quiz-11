export async function addQuestion(data: any) {
  const response = await fetch(`/admin/questions/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function getAllQuestions() {
  const response = await fetch(`/admin/questions/view`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
