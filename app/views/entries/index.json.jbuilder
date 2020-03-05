json.entries do
  json.array! @entries, partial: "entries/entry", as: :entry
end
