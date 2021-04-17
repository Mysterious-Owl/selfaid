import glob

#print(glob.glob("../*.json"))

file_name_list = glob.glob("../*.json")
file_name_list.sort(reverse=True)

print(file_name_list)

