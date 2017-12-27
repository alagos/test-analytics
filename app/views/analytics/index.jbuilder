json.array! @analytics do |analytic|
  json.query analytic.query
  json.count analytic.count
end
