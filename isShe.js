const string = readline();
print([...new Set(string)].length % 2 === 0 ? 'CHAT WITH HER!' : 'IGNORE HIM!')