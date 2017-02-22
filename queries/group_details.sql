select
      gr.GroupID
	, gr.Name
	, gr.Description
	, group_concat(ga.Name) as Games
from Groups gr
left join GroupGames gg on gr.GroupID = gg.GroupID
left join Games ga on gg.GameID = ga.GameID
where gr.GroupID = {0}
group by gr.Name, gr.Description
